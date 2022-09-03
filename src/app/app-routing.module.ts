import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstMainComponentComponent } from '../../src/app/components/first-main-component/first-main-component.component';
import { SecondMainComponentComponent } from '../../src/app/components/second-main-component/second-main-component.component';
import { FirstMainComponentFirstChildNestComponent } from './components/first-main-component-first-child-nest/first-main-component-first-child-nest.component';
import { FirstMainComponentSecondChildNestComponent } from './components/first-main-component-second-child-nest/first-main-component-second-child-nest.component';
import { SecondMainComponentFirstChildNestComponent } from './components/second-main-component-first-child-nest/second-main-component-first-child-nest.component';
import { SecondMainComponentSecondChildNestComponent } from './components/second-main-component-second-child-nest/second-main-component-second-child-nest.component';

const routes: Routes = [
  {
    path: 'first-main-component',
    component: FirstMainComponentComponent,
    children: [
      {
        path: 'first-nested-first',
        component: FirstMainComponentFirstChildNestComponent,
      },
      {
        path: 'first-nested-second',
        component: FirstMainComponentSecondChildNestComponent,
      },
    ],
  },
  {
    path: 'second-main-component',
    component: SecondMainComponentComponent,
    children: [
      {
        path: 'second-nested-first',
        component: SecondMainComponentFirstChildNestComponent,
      },
      {
        path: 'second-nested-second',
        component: SecondMainComponentSecondChildNestComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/first-main-component/first-nested-first',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
