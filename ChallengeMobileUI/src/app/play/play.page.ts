import { Component, OnInit } from '@angular/core';
import {PrizeService} from "../shared/services/prize.service";
import {PrizeView} from "../shared/models/views/prizeView.model";
import {SpinState} from "../shared/enums/spin-state.enum";
import {combineLatest, Subscription} from "rxjs";
import {SpinService} from "../shared/services/spin.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  numBoxes =4;
  prizesBehindBoxes: PrizeView[];
  boxPicked = -1;
  spinState: SpinState = SpinState.None;
  spinStateEnum: typeof SpinState = SpinState;
  prizeList: PrizeView[];
  private sub: Subscription;
  constructor(private prizeService: PrizeService, private spinService: SpinService) { }

  ngOnInit() {
    this.sub= this.prizeService.getPrizes(this.numBoxes).subscribe((sub)=> {
        this.prizesBehindBoxes = sub;
      }
    );
    this.spinService.selectedPrize.subscribe((value) => {
      this.boxPicked = value;
    });

    this.spinService.spinState.subscribe(state => {
      this.spinState = state;
    });

  }

  onSpin() {
    this.onReset();
    this.spinService.spinWheel();
  }

  onReset() {
    this.boxPicked = -1;
    if(this.sub)
    {
      this.sub.unsubscribe();
      this.sub= this.prizeService.getPrizes(this.numBoxes).subscribe((sub)=> this.prizesBehindBoxes=sub);

    }else{
      this.sub= this.prizeService.getPrizes(this.numBoxes).subscribe((sub)=> this.prizesBehindBoxes=sub);
    }
  }




}
