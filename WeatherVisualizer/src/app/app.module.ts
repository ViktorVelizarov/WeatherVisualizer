import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppShowRawJsonComponent } from './show-raw-json/show-raw-json.component';

@NgModule({
  declarations: [				
    AppComponent,
      AppShowRawJsonComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
