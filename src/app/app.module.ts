import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContatoComponent } from './component/contato/contato.component';
import { FotosComponent } from './component/fotos/fotos.component';
import { HeaderComponent } from './component/header/header.component';
import { InscreverComponent } from './component/inscrever/inscrever.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NormasComponent } from './component/normas/normas.component';
import { ProximosRituaisComponent } from './component/proximos-rituais/proximos-rituais.component';
import { MapaComponent } from './component/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContatoComponent,
    FotosComponent,
    HeaderComponent,
    InscreverComponent,
    NavbarComponent,
    NormasComponent,
    ProximosRituaisComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
