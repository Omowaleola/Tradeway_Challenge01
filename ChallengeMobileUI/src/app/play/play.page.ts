import { Component, OnInit } from '@angular/core';
import {PrizeService} from "../shared/services/prize.service";
import {PrizeView} from "../shared/models/views/prizeView.model";

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  constructor(private prizeService: PrizeService) { }
  private prizeList: PrizeView[];
  ngOnInit() {
    this.prizeService.getPrizes().subscribe((prizes)=>
    {
      this.prizeList=prizes;
    });
  }
  private shuffleAndGetPrizes(prizes: PrizeView[], numPrizes: number)
  {
    const tempArray: PrizeView[]=[];
    const emptyPrize: PrizeView= {
      name: "No Prize",
      imageUrl: "",
      quantityAvailable: this.calculateTotalPrizeQuantity(prizes)*2
    };
    tempArray.push(...(Array(emptyPrize.quantityAvailable).fill(emptyPrize)));
    prizes.forEach((prize)=>{
      let clone:PrizeView[] = Array(prize.quantityAvailable).fill(prize);
      tempArray.push(...clone);
    });
    const finalPrizePool = tempArray.sort((a,b)=>0.5-Math.random());
    return finalPrizePool.slice(0,numPrizes);
  }
  private  calculateTotalPrizeQuantity(prizes: PrizeView[] )
  {
    let total =0;
    prizes.forEach((prize)=>{
      total+=prize.quantityAvailable;
    });
    return total;
  }



}
