import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from '../result/result.component';
import {DxPieChartModule} from "devextreme-angular";


@NgModule({
  declarations: [
    ResultComponent
  ],
    imports: [
        CommonModule,
        ResultRoutingModule,
        DxPieChartModule
    ]
})
export class ResultModule { }
