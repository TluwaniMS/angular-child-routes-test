import { Component, OnInit } from '@angular/core';
import { ChildAndParentRouterCommunicationService } from '../../services/child-and-parent-router-communication.service';

@Component({
  selector: 'app-first-main-component',
  templateUrl: './first-main-component.component.html',
  styleUrls: ['./first-main-component.component.scss'],
})
export class FirstMainComponentComponent implements OnInit {
  constructor(
    private routerCommunicationSupport: ChildAndParentRouterCommunicationService
  ) {}

  ngOnInit(): void {
    this.routerCommunicationSupport.data$.subscribe((data:any) =>
      console.log(data.title)
    );
  }
}
