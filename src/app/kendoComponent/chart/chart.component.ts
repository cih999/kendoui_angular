import { Component, OnInit } from '@angular/core';
import { DonutData } from './chartDatas';
import { LegendItemClickEvent } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data = DonutData;
  isLegend = true;
  isShowDonut = false;
  isShowLine = false;

  constructor() { }

  ngOnInit() {
  }

  public labelContent(e: any): string {
    return e.category;
  }

  public legendHide(comp: any): void {
    this.isLegend = !this.isLegend;
    comp.suppressTransitions = true;
  }

  public seriesItemHide(comp: any): void {
    //Hide First Item
    const series = comp.seriesComponents.toArray()[0];
    series.togglePointVisibility(0);
    comp.suppressTransitions = true;
  }

  private onLegendItemClick(evt: any): void {

  }

  private showChart(val: string): void {
    if (val === 'Donut') {
      this.isShowDonut = !this.isShowDonut;
    } else if (val === 'Line') {
      this.isShowLine = !this.isShowLine;
    }
  }
}
