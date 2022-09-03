import { Component, OnInit } from '@angular/core';
import { ChildAndParentRouterCommunicationService } from '../../services/child-and-parent-router-communication.service';

@Component({
  selector: 'app-second-main-component',
  templateUrl: './second-main-component.component.html',
  styleUrls: ['./second-main-component.component.scss'],
})
export class SecondMainComponentComponent implements OnInit {
  PageTitle: any;
  PageDescription: any;

  constructor(
    private routerCommunicationSupport: ChildAndParentRouterCommunicationService
  ) {}

  ngOnInit(): void {
    this.routerCommunicationSupport.data$.subscribe((data: any) => {
      this.PageTitle = data.title;
      this.PageDescription = data.description;
    });
  }
}
