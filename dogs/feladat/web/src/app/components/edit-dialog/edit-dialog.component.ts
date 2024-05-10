import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditDialogSService } from 'src/app/services/edit-dialog-s.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit{
  public dogData;

  constructor(public editDialogService : EditDialogSService, public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editDialogService.resultList
    .subscribe(resultList =>{
      if(resultList != null){
        this.dogData = resultList;
      }
    })
   }

  reactiveForm : FormGroup

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      dogsName : new FormControl(this.dogData.name),
      lifeExpectancy : new FormControl(this.dogData.max_life_expectancy),
      goodWithchildren : new FormControl(this.dogData.good_with_children),
      energyLvl : new FormControl(this.dogData.energy),
      image : new FormControl(this.dogData.image)
    });
  }

  onSubmit() {
    const data = {
      name: this.reactiveForm.value.dogsName,
      good_with_children: this.reactiveForm.value.goodWithchildren,
      max_life_expectancy: this.reactiveForm.value.lifeExpectancy,
      energy: this.reactiveForm.value.energyLvl,
      id: this.dogData.id,
      image_link : "assets/" + this.reactiveForm.value.image + ".jpg"
    }
    
    this.editDialogService.updateResultList(data);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
  
}