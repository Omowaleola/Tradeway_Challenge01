import {RedeemedPrize} from "./redeemed_prize.model";

export interface Result
{
    id?: number;
    userId: number;
    questionId: number;
    questionOptionId: number;
    created?: Date;
    redeemedPrizes: RedeemedPrize;


}
