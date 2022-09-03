import { Component, OnInit } from '@angular/core';
import { ChildAndParentRouterCommunicationService } from '../../services/child-and-parent-router-communication.service';

@Component({
  selector: 'app-second-main-component-first-child-nest',
  templateUrl: './second-main-component-first-child-nest.component.html',
  styleUrls: ['./second-main-component-first-child-nest.component.scss'],
})
export class SecondMainComponentFirstChildNestComponent implements OnInit {
  supportingData = {
    title: 'First Nest',
    description:
      'This data is being read from the first nested route component, to the main parent component.',
  };
  
  constructor(
    private routerCommunicationSupport: ChildAndParentRouterCommunicationService
  ) {}

  ngOnInit(): void {
    this.routerCommunicationSupport.updateContentViewingSupport(
      this.supportingData
    );
  }
}
