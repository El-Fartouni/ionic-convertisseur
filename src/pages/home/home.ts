import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //Déclaration de la variable
  inputMeter;
  Result = "";

  //Déclaration d'une méthode
  convert() {
    var sizeIncentimeter = this.inputMeter * 100;
    var sizeInFeet = (sizeIncentimeter / 30.48).toFixed();
    var remains = sizeIncentimeter % 30.48;
    var sizeInches = Math.ceil(remains / 2.54);
    this.Result = sizeInFeet + " pieds " + sizeInches + " pouces";
  }


}
