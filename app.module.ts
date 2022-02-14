import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { EditarComponent } from './editar/editar.component';
import { VizualizarComponent } from './vizualizar/vizualizar.component';
import { RemoverComponent } from './remover/remover.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    EditarComponent,
    VizualizarComponent,
    RemoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
