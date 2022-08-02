import {RedeemedPrize} from "./redeemed_prize.model";
import {Result} from "./result.model";

export interface User
{
    id?: number;
    name: string;
    surname: string;
    email:string;
    cellPhone: string;
    created?: Date;
    Results ?: Result[];
    redeemedPrizes ?: RedeemedPrize[];
}
