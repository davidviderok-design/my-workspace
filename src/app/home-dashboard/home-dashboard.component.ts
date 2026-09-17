import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_BANNER_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-home-dashboard',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxCategoryChartModule, IgxIconComponent, IgxButtonDirective, IgxAvatarComponent],
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public todaySTimelineSelectedItem?: string;
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialBoxOfficeRevenue = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
