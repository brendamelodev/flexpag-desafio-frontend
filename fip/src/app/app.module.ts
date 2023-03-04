import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './View/header/header.component';
import { SimuladorComponent } from './View/simulador/simulador.component';
import { ResultadoComponent } from './View/resultado/resultado.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarroComponent } from './View/carro/carro.component';
import { MotoComponent } from './View/moto/moto.component';
import { CaminhaoComponent } from './View/caminhao/caminhao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimuladorComponent,
    ResultadoComponent,
    CarroComponent,
    MotoComponent,
    CaminhaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
