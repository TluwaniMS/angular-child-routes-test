import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-main-component',
  templateUrl: './first-main-component.component.html',
  styleUrls: ['./first-main-component.component.scss'],
})
export class FirstMainComponentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  checkNestedView() {
    console.log(this.router.url);
  }
}
