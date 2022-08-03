import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPageRoutingModule } from './play-routing.module';

import { PlayPage } from './play.page';
import {PrizeBoxComponent} from "../shared/components/prize-box/prize-box.component";
import {QuestionComponent} from "../shared/components/question/question.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlayPageRoutingModule,
    ],
  declarations: [PlayPage, PrizeBoxComponent, QuestionComponent],
  exports: [PrizeBoxComponent]
})
export class PlayPageModule {}
