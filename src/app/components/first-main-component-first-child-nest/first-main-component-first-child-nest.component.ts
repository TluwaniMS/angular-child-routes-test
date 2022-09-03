import { Component, OnInit } from '@angular/core';
import { ChildAndParentRouterCommunicationService } from '../../services/child-and-parent-router-communication.service';

@Component({
  selector: 'app-first-main-component-first-child-nest',
  templateUrl: './first-main-component-first-child-nest.component.html',
  styleUrls: ['./first-main-component-first-child-nest.component.scss'],
})
export class FirstMainComponentFirstChildNestComponent implements OnInit {
  supportingData = {
    title: 'First Nest',
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
