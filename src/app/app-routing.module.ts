import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MyreportsComponent } from './myreports/myreports.component';
import { SettingsComponent } from './settings/settings.component';
import { NewreportComponent } from './newreport/newreport.component';
import { ReportComponent } from './report/report.component';
import { ImportReportComponent } from './import-report/import-report.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';

const routes: Routes = [{
  path: 'home',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'faq',
  pathMatch: 'full',
  component: FaqComponent
},
{
  path: 'my-reports',
  pathMatch: 'full',
  component: MyreportsComponent
},
{
  path: 'new-report',
  pathMatch: 'full',
  component: NewreportComponent
},
{
  path: 'report/:report_id',
  pathMatch: 'full',
  component: ReportComponent
},
{
  path: 'settings',
  pathMatch: 'full',
  component: SettingsComponent
},
{
  path: 'import-report',
  pathMatch: 'full',
  component: ImportReportComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'server',
  loadChildren: () => new Promise(() => { if(window.location.href.match(/server/)) window.location.href = 'https://github.com/kac89/vulnrepo-server'; })
},
{
  path: 'templates-list',
  pathMatch: 'full',
  component: TemplatesListComponent
},
{
  path: '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
