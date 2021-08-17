import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PremiosComponent } from './pages/premios/premios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienessomosComponent,
    ClientesComponent,
    ServiciosComponent,
    PremiosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
