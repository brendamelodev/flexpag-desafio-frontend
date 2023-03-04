import { CaminhaoComponent } from './View/caminhao/caminhao.component';
import { MotoComponent } from './View/moto/moto.component';
import { SimuladorComponent } from './View/simulador/simulador.component';
import { CarroComponent } from './View/carro/carro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  { path: 'home', component: SimuladorComponent },
  { path: 'carro', component: CarroComponent },
  { path: 'moto', component: MotoComponent },
  { path: 'caminhao', component: CaminhaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
