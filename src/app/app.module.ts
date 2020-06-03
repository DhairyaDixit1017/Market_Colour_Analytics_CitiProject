import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterSectorComponent } from './filter-sector/filter-sector.component';
import { InterService } from './Services/inter.service';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import {ChartModule} from 'primeng/chart';
import { GridBaseComponent } from './grid-base/grid-base.component';
import {TableModule} from 'primeng/table';
import { AvgvolComponent } from './avgvol/avgvol.component';
import { AvgstockComponent } from './avgstock/avgstock.component';
import { AvgvolsecComponent } from './avgvolsec/avgvolsec.component';
import { AvgstocksecComponent } from './avgstocksec/avgstocksec.component';
import { SectorDropComponent } from './sector-drop/sector-drop.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { CompanyDropComponent } from './company-drop/company-drop.component';
import { CalComponent } from './cal/cal.component';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    FilterSectorComponent,
    BarGraphComponent,
    GridBaseComponent,
    AvgvolComponent,
    AvgstockComponent,
    AvgvolsecComponent,
    AvgstocksecComponent,
    SectorDropComponent,
    CompanyDropComponent,
    CalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    TabViewModule
  ],
  providers: [ InterService ],
  bootstrap: [AppComponent, FilterListComponent]
})
export class AppModule { 

}

