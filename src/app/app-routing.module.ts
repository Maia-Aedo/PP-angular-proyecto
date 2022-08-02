import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component'
import { ComoComprarComponent } from './pages/como-comprar/como-comprar.component';
import { VeranoComponent } from './pages/verano/verano.component';
import { InviernoComponent } from './pages/invierno/invierno.component';
import { ConjuntosComponent } from './pages/conjuntos/conjuntos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'como-comprar', component: ComoComprarComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'verano', component: VeranoComponent},
  {path: 'primavera', component: VeranoComponent},
  {path: 'ss2023', component: VeranoComponent},
  {path: 'invierno', component: InviernoComponent},
  {path: 'fw2022', component: InviernoComponent},
  {path: 'otoño', component: InviernoComponent},
  {path: 'conjuntos', component: ConjuntosComponent},
  {path: '**', component: InicioComponent},
  {path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
