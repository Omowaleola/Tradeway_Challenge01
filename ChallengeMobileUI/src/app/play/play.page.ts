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

  ngOnInit() {
    this.prizeService.getPrizes().subscribe((prizes)=>
    {
      this.shuffleAndGetPrize(prizes);


    });
  }
  private shuffleAndGetPrize(prizes: PrizeView[])
  {
    let cumulative= 0.0;
    let result='';
    const elements= this.getPrizeProbability(prizes);
    let random = Math.random();
    elements.forEach((prize,key)=>{
      cumulative+= prize;
      if(random < cumulative)
      {
        result= key;
      }
    });
    console.log("Prize",prizes.find(prize=>prize.name==result));
    return prizes.find(prize=>prize.name==result);
  }
  private getPrizeProbability(prizes: PrizeView[])
  {
    let elements= new Map<string,number> ();
    const total= this.calculateTotalPrizeQuantity(prizes);
    prizes.forEach((prize)=>{
      const prizeProbability= prize.quantityAvailable/total;
      elements.set(prize.name,prizeProbability);
    })
    console.log('Probability', elements);
    return elements;
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
