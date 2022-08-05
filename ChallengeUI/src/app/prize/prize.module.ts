import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeRoutingModule } from './prize-routing.module';
import { PrizeComponent } from './prize.component';
import {DxDataGridModule, DxScrollViewModule} from "devextreme-angular";
import {SingleCardModule} from "../layouts";


@NgModule({
  declarations: [
    PrizeComponent
  ],
  imports: [
    CommonModule,
    PrizeRoutingModule,
    DxDataGridModule,
    SingleCardModule,
    DxScrollViewModule,
  ]
})
export class PrizeModule { }
