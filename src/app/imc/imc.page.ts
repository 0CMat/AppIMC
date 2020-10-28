import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/models/Imc';
import { ImcService } from 'src/services/ImcService';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  public imc: Imc = new Imc();
  constructor(private _calculeImc: ImcService) { }

  ngOnInit() {
  }

  calcularIMC(){
    //implementar o cod.
  }

}
