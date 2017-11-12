import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './kendoComponent/chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GridExampleComponent } from './kendoComponent/grid-example/grid-example.component';
import { ButtonExampleComponent } from './kendoComponent/button-example/button-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PageNotFoundComponent,
    GridExampleComponent,
    ButtonExampleComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ButtonsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
