import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './View/header/header.component';
import { SimuladorComponent } from './View/simulador/simulador.component';
import { ResultadoComponent } from './View/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimuladorComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
