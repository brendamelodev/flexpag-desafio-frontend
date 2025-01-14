import { Valor } from './../../Model/valor';
import { FipService } from './../../Contoller/fip.service';
import { Ano } from './../../Model/ano';
import { Modelo } from './../../Model/modelo';
import { Marca } from './../../Model/marca';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent implements OnInit {
  tipos = [
    { id: 'carros', nome: 'Carros' },
    { id: 'motos', nome: 'Motos' },
    { id: 'caminhoes', nome: 'Caminhões' }
  ];
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  anos: Ano[] = [];
  valor: Valor | undefined;
  mostrarResultado: boolean = false;

  formulario: FormGroup = this.fb.group({
    tipo: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    ano: ['', Validators.required],
    venda: ['', Validators.required]
  });

  constructor(private service: FipService, private fb: FormBuilder) { }

  ngOnInit(): void { }

  getMarcas(tipo: string) {
    this.service.getMarcas(tipo).subscribe((marca) => {
      this.marcas = marca;
    }, (error) => {
      console.log(error);
    })
  }

  getModelos(tipo: string, marcaId: string) {
    this.service.getModelos(tipo, marcaId).subscribe(({ modelos }) => {
      this.modelos = modelos;
    }, (error) => {
      console.log(error);
    })
  }

  getAnos(tipo: string, marcaId: string, modeloId: number) {
    this.service.getAnos(tipo, marcaId, modeloId).subscribe((ano) => {
      this.anos = ano;
    }, (error) => {
      console.log(error);
    })
  }

  getValor(tipo: string, marcaId: any, modeloId: number, anoId: string) {
    this.service.getValor(tipo, marcaId, modeloId, anoId).subscribe((valor) => {
      this.valor = valor;
    }, (error) => {
      console.log(error);
    })
  }

  // formatar e salvar valor de moeda no formulário
  formatAndSaveCurrency(event: any) {
    const value = event.target.value.replace(".", "").replace(",", "."); // Remove todos os pontos e substitui a vírgula
    if (!isNaN(value)) { //verifica se o valor digitado é um número válido
      const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(+value);
      this.formulario.controls['venda'].setValue(formattedValue);
    }
    else {
      this.formulario.controls['venda'].setValue(''); // Se não for um número válido, seta o valor do input para vazio
      console.log("NaN");
    }
  }

  submit() {
    if (this.formulario.valid) {
      this.service.formularioData = this.formulario.controls['venda'].value;
      this.service.responseData = this.valor
      this.mostrarResultado = true;
    } else {
      console.log("erro");
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
