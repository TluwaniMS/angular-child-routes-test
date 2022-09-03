import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-main-component-second-child-nest',
  templateUrl: './first-main-component-second-child-nest.component.html',
  styleUrls: ['./first-main-component-second-child-nest.component.scss'],
})
export class FirstMainComponentSecondChildNestComponent implements OnInit {
  @Output() nestedViewCheck = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.nestedViewCheck.emit('First Child');
  }
}
