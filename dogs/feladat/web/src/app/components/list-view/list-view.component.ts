import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { EditDialogSService } from 'src/app/services/edit-dialog-s.service';
import { NewDialogSService } from 'src/app/services/new-dialog-s.service';

import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit{
  public dogBreeds = ["akita", "pug", "poodle", "beagle", "dachshund", "maltese", "boxer", "rottweiler", "chihuahua", "terrier"];

  public dogStartData = JSON.parse(localStorage.getItem("dogLocalData"));
  public dogs = [];

  public editDialogService;
  public newDialogService;

  public dialog;

  constructor(private Dogs: DogsService, editDialogService : EditDialogSService,
    newDialogService: NewDialogSService, dialog : MatDialog) {

      this.editDialogService = editDialogService;
      this.newDialogService = newDialogService;
      this.dialog = dialog;
  }

  ngOnInit() {
    for (let i = 0; i < this.dogBreeds.length; i++) {
      this.Dogs.GetData(this.dogBreeds[i]).subscribe(data => {
        data[0]["id"] = this.dogBreeds[i];
        this.dogs.push(data[0]);
      });
    }
    
    //Add new dog
    this.newDialogService.resultList
        .subscribe(resultList =>{
          if(resultList != null){
            this.dogs.push(resultList);
          }
        })

    //Edit a dog
    this.editDialogService.resultList
    .subscribe(resultList =>{
      if(resultList != null){
        for (let i = 0; i < this.dogs.length; i++) {
          if(this.dogs[i].id == resultList.id){
            this.dogs.splice(i, 1, resultList);
          }
        }
      }
    })
  }

  OnClickDelete(Dogsid: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let i = 0; i < this.dogs.length; i++) {
          if(this.dogs[i].id == Dogsid){
            this.dogs.splice(i, 1);
          }
        }
      }
      this.SaveData();
    });
  }

  OnClickEdit(Dogsid: string) {
    for (let i = 0; i < this.dogStartData.length; i++) {
      if(this.dogStartData[i].id == Dogsid){
        this.editDialogService.updateResultList(this.dogStartData[i]);
      }
    }

    const dialogRef = this.dialog.open(EditDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.SaveData();
      }
    });
  }

  OnClickAddNew(){
    const dialogRef = this.dialog.open(NewDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.SaveData();
      }
    });
  }

  SaveData(){
    localStorage.setItem("dogLocalData", JSON.stringify(this.dogs));
    this.dogStartData = JSON.parse(localStorage.getItem("dogLocalData"));
  }
}