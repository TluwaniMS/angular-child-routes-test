import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildAndParentRouterCommunicationService {
  private data = new BehaviorSubject({ title: '', description: '' });
  data$ = this.data.asObservable();

  constructor() {}

  updateContentViewingSupport(data: any) {
    this.data.next(data);
  }
}
