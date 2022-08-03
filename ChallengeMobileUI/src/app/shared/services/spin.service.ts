import {EventEmitter, Injectable} from '@angular/core';
import {SpinState} from "../enums/spin-state.enum";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinService {
  public selectedPrize: BehaviorSubject<number> = new BehaviorSubject<number>(
    -1
  );
  public spinState: EventEmitter<SpinState> = new EventEmitter<SpinState>()
  constructor() { }
  spinWheel() {
    this.spinState.emit(SpinState.Spinning);
    const numberOfSpins = 10 + Math.floor(Math.random() * 20);
    const startingBox = Math.floor(Math.random() * 8);
    let spins = 0;
    const spinSpeed = 100 + Math.floor(Math.random() * 100);
    let selectedBox = startingBox;
    this.selectedPrize.next(selectedBox);
    const interval = setInterval(() => {
      selectedBox++;
      if (selectedBox >= 4) {
        selectedBox = 0;
      }
      console.log("SelectedBox", selectedBox);
      this.selectedPrize.next(selectedBox);
      spins++;
      if (spins > numberOfSpins) {
        clearInterval(interval);
        this.spinState.emit(SpinState.ShowPrize);
      }
    }, spinSpeed);
  }
  showQuestion() {
    this.spinState.emit(SpinState.ShowQuestion);
  }
  showPrize()
  {
    this.spinState.emit(SpinState.ShowPrize);
  }
}
