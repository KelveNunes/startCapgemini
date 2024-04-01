import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';
import { RendenrizandoListasComponent } from './rendenrizando-listas/rendenrizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { Servico1Component } from './servico1/servico1.component';
import { Servico2Component } from './servico2/servico2.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    TerceiroComponenteComponent,
    TwoWayDataBindComponent,
    RendenrizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    Servico1Component,
    Servico2Component
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
