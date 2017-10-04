import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
  ],
  imports: [
    BrowserModule, FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
