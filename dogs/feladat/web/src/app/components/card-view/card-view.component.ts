import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent{
  public dogsCard = [];

  constructor() {
    this.dogsCard = JSON.parse(localStorage.getItem("dogLocalData"));
  }
}
