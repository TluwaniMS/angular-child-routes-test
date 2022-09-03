import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMainComponentComponent } from '../../src/app/components/first-main-component/first-main-component.component';
import { SecondMainComponentComponent } from '../../src/app/components/second-main-component/second-main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstMainComponentComponent,
    SecondMainComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
