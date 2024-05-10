import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDialogSService {
  showDialog = false;

  public resultList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  public resultList$: Observable<any[]> = this.resultList.asObservable();

  updateResultList(updatedList) {
    this.resultList.next(updatedList);
  }
  
  constructor() { }
}