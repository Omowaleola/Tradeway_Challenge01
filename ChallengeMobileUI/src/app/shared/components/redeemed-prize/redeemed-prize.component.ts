import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-redeemed-prize',
  templateUrl: './redeemed-prize.component.html',
  styleUrls: ['./redeemed-prize.component.scss'],
})
export class RedeemedPrizeComponent implements OnInit {
  @Input() questionCorrect: boolean;
  @Input() prizeName: string;
  @Input() prizeUrl: string;

  constructor() { }

  ngOnInit() {}

}
