import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SmartNotesComponent } from './smart-notes/smart-notes.component';
import { FinanceTrackerComponent } from './finance-tracker/finance-tracker.component';
import { SecureDocumentsComponent } from './secure-documents/secure-documents.component';
import { QuarterlyGoalsComponent } from './quarterly-goals/quarterly-goals.component';
import { CalendarPlannerComponent } from './calendar-planner/calendar-planner.component';
import { HabitStreaksComponent } from './habit-streaks/habit-streaks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home-dashboard', component: HomeDashboardComponent, data: { text: 'Home-Dashboard' } },
  { path: 'smart-notes', component: SmartNotesComponent, data: { text: 'Smart-Notes' } },
  { path: 'finance-tracker', component: FinanceTrackerComponent, data: { text: 'Finance-Tracker' } },
  { path: 'secure-documents', component: SecureDocumentsComponent, data: { text: 'Secure-Documents' } },
  { path: 'quarterly-goals', component: QuarterlyGoalsComponent, data: { text: 'Quarterly-Goals' } },
  { path: 'calendar-planner', component: CalendarPlannerComponent, data: { text: 'Calendar-Planner' } },
  { path: 'habit-streaks', component: HabitStreaksComponent, data: { text: 'Habit-Streaks' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
