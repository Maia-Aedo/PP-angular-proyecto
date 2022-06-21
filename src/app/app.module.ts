import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CasosExitoComponent } from './pages/casos-exito/casos-exito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EquipoComponent,
    ServiciosComponent,
    CasosExitoComponent,
    ContactoComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatButtonModule,
    ButtonModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
