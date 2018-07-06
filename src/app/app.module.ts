import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberOnlyDirective } from './number.directive';

import {Ng2BRPipesModule} from 'ng2-brpipes';

@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective 
  ],
  imports: [
    BrowserModule,
    Ng2BRPipesModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
