import { Valor } from './../../Model/valor';
import { FipService } from './../../Contoller/fip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  formularioData: any | undefined;
  responseData: any | undefined;
  resultadoCalculo: number = 0;

  constructor(private service: FipService) { }

  ngOnInit(): void {
    this.formularioData = this.service.formularioData;
    this.responseData = this.service.responseData;
    this.calcularPercentual();
    this.formatData();
  }

  calcularPercentual() {
    const valorDigitado = parseFloat(this.formularioData.replace(/\D/g, '')) / 100;
    const valorFipe = parseFloat(this.responseData.Valor.replace(/\D/g, '')) / 100;
    const calculo = ((valorDigitado - valorFipe) / valorFipe) * 100;
    this.resultadoCalculo = calculo;
    return this.resultadoCalculo;
  }

  formatData(){
    const dado = Math.abs(this.resultadoCalculo).toFixed(1) + '%';
    return dado;
  }
}
