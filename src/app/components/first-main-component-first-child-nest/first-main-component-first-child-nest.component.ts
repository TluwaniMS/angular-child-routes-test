import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-main-component-first-child-nest',
  templateUrl: './first-main-component-first-child-nest.component.html',
  styleUrls: ['./first-main-component-first-child-nest.component.scss'],
})
export class FirstMainComponentFirstChildNestComponent implements OnInit {
  @Output() nestedViewCheck = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.nestedViewCheck.emit('First Child');
  }
}
