import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './kendoComponent/chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GridExampleComponent } from './kendoComponent/grid-example/grid-example.component';
import { ButtonExampleComponent } from './kendoComponent/button-example/button-example.component';


const appRoutes: Routes = [
  { path: 'button', component: ButtonExampleComponent },
  { path: 'grid',      component: GridExampleComponent },
  { path: 'chart',      component: ChartComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
