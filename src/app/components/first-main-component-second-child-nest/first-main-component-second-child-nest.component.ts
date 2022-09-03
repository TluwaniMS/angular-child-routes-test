import { Component, OnInit } from '@angular/core';
import { ChildAndParentRouterCommunicationService } from '../../services/child-and-parent-router-communication.service';

@Component({
  selector: 'app-first-main-component-second-child-nest',
  templateUrl: './first-main-component-second-child-nest.component.html',
  styleUrls: ['./first-main-component-second-child-nest.component.scss'],
})
export class FirstMainComponentSecondChildNestComponent implements OnInit {
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
