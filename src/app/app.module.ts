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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ChildAndParentRouterCommunicationService } from '../app/services/child-and-parent-router-communication.service';
import { MainLandingPageComponent } from './components/main-landing-page/main-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstMainComponentComponent,
    SecondMainComponentComponent,
    FirstMainComponentFirstChildNestComponent,
    FirstMainComponentSecondChildNestComponent,
    SecondMainComponentFirstChildNestComponent,
    SecondMainComponentSecondChildNestComponent,
    MainLandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [ChildAndParentRouterCommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
