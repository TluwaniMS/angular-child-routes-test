import { Component, OnInit } from '@angular/core';
import { ChildAndParentRouterCommunicationService } from '../../services/child-and-parent-router-communication.service';

@Component({
  selector: 'app-second-main-component-second-child-nest',
  templateUrl: './second-main-component-second-child-nest.component.html',
  styleUrls: ['./second-main-component-second-child-nest.component.scss'],
})
export class SecondMainComponentSecondChildNestComponent implements OnInit {
  supportingData = {
    title: 'Second Nest',
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
