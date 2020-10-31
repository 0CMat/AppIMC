import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/models/Imc';
import { ImcService } from 'src/services/ImcService';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  
  public nome_dev:string = "Mat0C";
    
  public imc: Imc = new Imc();
  
  resultado:number;
  constructor(private _calculeImc: ImcService) { 
    this.resultado = 0;
  }

  ngOnInit() {

  }


  public calcular(){
    this.resultado = this._calculeImc.calcularImc(this.imc);
    console.log(this.resultado);
  }

}
