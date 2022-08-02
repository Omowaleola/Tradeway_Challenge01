import {RedeemedPrize} from "./redeemed_prize.model";

export interface Prize
{
  id?: number;
  name: string;
  imageUrl: string;
  quantityAvailable: number;
  redeemedPrizes: RedeemedPrize[];
}
