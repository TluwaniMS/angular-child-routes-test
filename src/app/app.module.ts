import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMainComponentComponent } from '../../src/app/components/first-main-component/first-main-component.component';
import { SecondMainComponentComponent } from '../../src/app/components/second-main-component/second-main-component.component';
import { FirstMainComponentFirstChildNestComponent } from './components/first-main-component-first-child-nest/first-main-component-first-child-nest.component';
import { FirstMainComponentSecondChildNestComponent } from './components/first-main-component-second-child-nest/first-main-component-second-child-nest.component';
import { SecondMainComponentFirstChildNestComponent } from './components/second-main-component-first-child-nest/second-main-component-first-child-nest.component';
import { SecondMainComponentSecondChildNestComponent } from './components/second-main-component-second-child-nest/second-main-component-second-child-nest.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstMainComponentComponent,
    SecondMainComponentComponent,
    FirstMainComponentFirstChildNestComponent,
    FirstMainComponentSecondChildNestComponent,
    SecondMainComponentFirstChildNestComponent,
    SecondMainComponentSecondChildNestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
