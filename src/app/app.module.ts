// Boa Prática separar os imports do angular dos nossos imports //
// e separa os imports de 2 em 2 ou de 3 em 3 //
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { FotografiaModule } from './fotografia/fotografia.module';



@NgModule({
  //Declarations é para component//
  declarations: [
    AppComponent,   
    
  ],

  //No imports so entra Modulo//
  imports: [    
    AppRoutingModule,
    FotografiaModule,
    CoreModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
