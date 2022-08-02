import {RedeemedPrize} from "../redeemed_prize.model";

export interface PrizeView
{
  id?: number;
  name: string;
  imageUrl: string;
  quantityAvailable: number;
}
