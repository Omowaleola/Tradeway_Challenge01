import { Component, OnInit } from '@angular/core';
import {PrizeService} from "../shared/services/prize.service";
import {PrizeView} from "../shared/models/views/prizeView.model";
import applyChanges from 'devextreme/data/apply_changes';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss']
})
export class PrizeComponent implements OnInit {

  prizeList!: PrizeView[];
  constructor(private prizeService: PrizeService) { }

  ngOnInit(): void {
    this.prizeService.getAllPrizes().subscribe((prizes)=>{
      this.prizeList=prizes;
      console.log('prizes',this.prizeList);
    })
  }

  onSaving($event: any) {
    console.log($event);
    const change = $event.changes[0];
    if (change) {
      $event.cancel = true;
      $event.promise = this.processSaving(change);
    }
  }

  private processSaving(change: any) {
      if(change.type == 'insert')
      {
          const tempPrize: PrizeView = {
                                        name:change.data.name,
                                        imageUrl:change.data.imageUrl,
                                        quantityAvailable: change.data.quantityAvailable
                                        };
          this.prizeService.savePrize(tempPrize).subscribe((next)=>{
              window.location.reload();
            },
            (error)=>{
              alert(error.error)
            });
      }else if (change.type == 'update')
      {
        const oldPrize = this.prizeList.find((x)=>x.id==change.key);
        if(change.data.name)
        {
          oldPrize.name=change.data.name;
        }
        if(change.data.imageUrl)
        {
          oldPrize.imageUrl=change.data.imageUrl;
        }
        if(change.data.quantityAvailable)
        {
          oldPrize.quantityAvailable=change.data.quantityAvailable;
        }
        console.log(change.key);
        this.prizeService.updatePrize(change.key,oldPrize).subscribe((next)=>{
          window.location.reload();
        },
          (error)=>{
          alert(error.error)
          });
      }
  }
}
