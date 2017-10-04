import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { FilterDataPipe } from './filter-data.pipe';
import { OrderPipe } from './order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    FilterDataPipe,
    OrderPipe,
  ],
  imports: [
    BrowserModule, FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
