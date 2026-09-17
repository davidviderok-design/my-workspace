import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-habit-streaks',
  imports: [IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxBadgeComponent],
  templateUrl: './habit-streaks.component.html',
  styleUrls: ['./habit-streaks.component.scss']
})
export class HabitStreaksComponent {}
