import { Valor } from './../../Model/valor';
import { FipService } from './../../Contoller/fip.service';
import { Ano } from './../../Model/ano';
import { Modelo } from './../../Model/modelo';
import { Marca } from './../../Model/marca';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.scss']
})
export class MotoComponent implements OnInit {
  tipos = "motos";
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  anos: Ano[] = [];
  valor: Valor | undefined;
  mostrarResultado: boolean = false;

  formulario: FormGroup = this.fb.group({
    tipo: ['carros'],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    ano: ['', Validators.required],
    venda: ['', Validators.required]
  });

  constructor(private service: FipService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getMarcas();
   }

  getMarcas() {
    this.service.getMarcas(this.tipos).subscribe((marca) => {
      this.marcas = marca;
    }, (error) => {
      console.log(error);
    })
  }

  getModelos(marcaId: string) {
    this.service.getModelos(this.tipos, marcaId).subscribe(({ modelos }) => {
      this.modelos = modelos;
    }, (error) => {
      console.log(error);
    })
  }

  getAnos(marcaId: string, modeloId: number) {
    this.service.getAnos(this.tipos, marcaId, modeloId).subscribe((ano) => {
      this.anos = ano;
    }, (error) => {
      console.log(error);
    })
  }

  getValor(marcaId: any, modeloId: number, anoId: string) {
    this.service.getValor(this.tipos, marcaId, modeloId, anoId).subscribe((valor) => {
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
