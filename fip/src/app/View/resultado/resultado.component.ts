import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/Model/veiculo';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  veiculos: Veiculo[] = [{
    valor: "R$ 125.318,00",
    marca: "VW - VolksWagen",
    modelo: "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
    anoModelo: 2014,
    combustivel: "Diesel",
    codigoFipe: "005340-6",
    mesReferencia: "janeiro de 2023",
    tipoVeiculo: 1,
    siglaCombustivel: "D"
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

}
