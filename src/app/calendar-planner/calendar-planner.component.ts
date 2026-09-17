import { Component } from '@angular/core';
import { IGX_CALENDAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-calendar-planner',
  imports: [IGX_CALENDAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent],
  templateUrl: './calendar-planner.component.html',
  styleUrls: ['./calendar-planner.component.scss']
})
export class CalendarPlannerComponent {
  public timelineListSelectedItem?: string;
  public date: Date = new Date('2023-10-12');
}
