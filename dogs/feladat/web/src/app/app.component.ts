import { Component } from '@angular/core';
import { EditDialogSService } from './services/edit-dialog-s.service';
import { NewDialogSService } from './services/new-dialog-s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public editDialogService : EditDialogSService, public newDialogService : NewDialogSService) { }
  title = 'web-hazi';
}
