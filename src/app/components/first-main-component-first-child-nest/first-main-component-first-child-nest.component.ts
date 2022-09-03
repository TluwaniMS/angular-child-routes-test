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
    description:
      'This data is being read from the first nested route component, to the main parent component.',
  };

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private routerCommunicationSupport: ChildAndParentRouterCommunicationService
  ) {}

  ngOnInit(): void {
    this.routerCommunicationSupport.updateContentViewingSupport(
      this.supportingData
    );
  }
}
