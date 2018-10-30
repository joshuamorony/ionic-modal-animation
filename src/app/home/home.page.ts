import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { myEnterAnimation } from '../animations/enter';
import { myLeaveAnimation } from '../animations/leave';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController){

  }

  launchModal(){

    this.modalCtrl.create({
      component: ModalPage,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    }).then((modal) => {
      modal.present();
    });

  }

}
