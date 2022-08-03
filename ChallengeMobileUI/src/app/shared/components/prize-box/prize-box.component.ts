import { Component, Input, OnInit } from '@angular/core';
import { PrizeView } from '../../models/views/prizeView.model';
import { SpinState } from '../../enums/spin-state.enum';
import { PrizeService } from '../../services/prize.service';
import { SpinService } from '../../services/spin.service';
import { ModalController } from '@ionic/angular';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-prize-box',
  templateUrl: './prize-box.component.html',
  styleUrls: ['./prize-box.component.scss'],
})
export class PrizeBoxComponent implements OnInit {
  @Input() prize: PrizeView;
  @Input() prizeId: number;
  @Input() selectedBox: number;
  @Input() spinState: SpinState;
  spinStateEnum: typeof SpinState = SpinState;
  constructor(
    private prizeService: PrizeService,
    private spinService: SpinService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}
  showPrizes() {
    this.spinService.showQuestion();
  }

  async openQuestion(prize) {
    const questionModal = await this.modalCtrl.create({
      component: QuestionComponent,
      backdropDismiss: false,
      showBackdrop: true,
      componentProps: {
        prize: prize,
      },
    });
    return questionModal.present();
  }
}
