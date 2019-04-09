import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { SeguroPipe } from './pipes/seguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';




@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    SeguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
