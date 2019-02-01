import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import {FormsModule} from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts/ng2-charts';
// routes
import { PAGES_ROUTES } from './pages.routes';


// temporal
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
declarations: [
PagesComponent,
DashboardComponent,
Graficas1Component,
ProgressComponent,
IncrementadorComponent,
GraficoDonaComponent,
AccountSettingsComponent,
PromesasComponent,
RxjsComponent
],
exports: [
PagesComponent,
DashboardComponent,
Graficas1Component,
ProgressComponent,
GraficoDonaComponent
],
imports: [
 SharedModule,
 PAGES_ROUTES,
 FormsModule,
 ChartsModule
]
})

export class PagesModule {}
